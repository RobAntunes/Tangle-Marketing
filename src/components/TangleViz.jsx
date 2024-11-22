import React, { useEffect, useState, useRef } from 'react';

const TangleViz = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [particles, setParticles] = useState([]);
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef();
  
  // Constants for a high-resolution visualization
  const NODE_COUNT = 36;
  const OUTER_RADIUS = 360;
  const INNER_RADIUS = 280;
  const CENTER_X = 400;
  const CENTER_Y = 400;
  const RING_THICKNESS = 40;
  
  // Animation loop for continuous rotation
  const animate = () => {
    setRotation(prev => (prev + 0.1) % 360);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    // Generate nodes in a circular arrangement with z-depth
    const newNodes = Array.from({ length: NODE_COUNT }, (_, i) => {
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const depth = Math.sin(angle * 3) * 60;
      
      return {
        id: i,
        angle,
        x: CENTER_X + Math.cos(angle) * INNER_RADIUS,
        y: CENTER_Y + Math.sin(angle) * INNER_RADIUS,
        z: depth,
        color: `hsla(${210 + depth}, 70%, ${50 + (depth/2)}%, 1)`
      };
    });
    setNodes(newNodes);

    // Generate dynamic interconnections
    const newConnections = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (Math.abs(i - j) <= 3 || Math.random() < 0.15) {
          newConnections.push({
            id: `${i}-${j}`,
            source: i,
            target: j,
            strength: Math.random() * 0.8 + 0.2
          });
        }
      }
    }
    setConnections(newConnections);
  }, []);

  // Advanced particle system
  useEffect(() => {
    const particleInterval = setInterval(() => {
      setParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            progress: p.progress + 0.01
          }))
          .filter(p => p.progress < 1);

        if (connections.length > 0 && updated.length < 80) {
          const connection = connections[Math.floor(Math.random() * connections.length)];
          const source = nodes[connection.source];
          const target = nodes[connection.target];

          if (source && target) {
            updated.push({
              id: Date.now().toString() + Math.random(),
              sourceNode: connection.source,
              targetNode: connection.target,
              progress: 0,
              size: 2 + Math.random() * 2,
              color: `hsla(${210 + Math.random() * 40}, 100%, ${70 + Math.random() * 20}%, ${0.6 + Math.random() * 0.4})`
            });
          }
        }

        return updated;
      });
    }, 30);

    return () => clearInterval(particleInterval);
  }, [connections, nodes]);

  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <svg className="w-[85%] h-[85%]" viewBox="0 0 800 800">
        <defs>
          {/* Enhanced glow effects */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feComposite in="blur" operator="over" in2="blur" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -7"
            />
          </filter>
          
          {/* Particle effects */}
          <filter id="particleBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 25 -15"
            />
          </filter>

          {/* Dynamic ring gradient */}
          <linearGradient id="ringGradient" gradientTransform={`rotate(${rotation})`}>
            <stop offset="0%" stopColor="hsla(210, 70%, 50%, 0.8)" />
            <stop offset="50%" stopColor="hsla(240, 70%, 60%, 0.6)" />
            <stop offset="100%" stopColor="hsla(210, 70%, 50%, 0.8)" />
          </linearGradient>
        </defs>

        {/* Background elements */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={OUTER_RADIUS + 100}
          fill="none"
          stroke="hsla(210, 30%, 20%, 0.3)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {/* Outer Hash Ring */}
        <g className="transform-gpu">
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={OUTER_RADIUS}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth={RING_THICKNESS}
            className="opacity-80"
            filter="url(#glow)"
          />
          
          {/* Hash markers */}
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = (i / 72) * Math.PI * 2;
            const x1 = CENTER_X + Math.cos(angle) * (OUTER_RADIUS - RING_THICKNESS/2);
            const y1 = CENTER_Y + Math.sin(angle) * (OUTER_RADIUS - RING_THICKNESS/2);
            const x2 = CENTER_X + Math.cos(angle) * (OUTER_RADIUS + RING_THICKNESS/2);
            const y2 = CENTER_Y + Math.sin(angle) * (OUTER_RADIUS + RING_THICKNESS/2);
            
            return (
              <line
                key={`hash-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsla(210, 100%, 80%, 0.3)"
                strokeWidth={1}
                className="transition-opacity duration-500"
                style={{
                  opacity: 0.3 + Math.sin((rotation + i * 5) * Math.PI / 180) * 0.2
                }}
              />
            );
          })}
        </g>

        {/* Connection paths with depth-based rendering */}
        {connections.map(conn => {
          const source = nodes[conn.source];
          const target = nodes[conn.target];
          if (!source || !target) return null;
          
          const avgDepth = (source.z + target.z) / 2;
          const opacity = 0.1 + (conn.strength * 0.2) * (1 - Math.abs(avgDepth) / 100);

          return (
            <g key={conn.id} className="transition-all duration-500">
              <path
                d={`M ${source.x} ${source.y} Q ${CENTER_X} ${CENTER_Y} ${target.x} ${target.y}`}
                stroke={`hsla(210, 70%, 50%, ${opacity})`}
                strokeWidth={1 + conn.strength * 2}
                fill="none"
                filter="url(#glow)"
              />
              <path
                d={`M ${source.x} ${source.y} Q ${CENTER_X} ${CENTER_Y} ${target.x} ${target.y}`}
                stroke={`hsla(210, 100%, 70%, ${opacity * 0.5})`}
                strokeWidth={0.5 + conn.strength}
                fill="none"
                className="mix-blend-screen"
              />
            </g>
          );
        })}

        {/* Dynamic particles */}
        {particles.map(particle => {
          const source = nodes[particle.sourceNode];
          const target = nodes[particle.targetNode];
          
          if (!source || !target) return null;

          const t = particle.progress;
          const x = Math.pow(1-t, 2) * source.x + 
                   2 * (1-t) * t * CENTER_X + 
                   Math.pow(t, 2) * target.x;
          const y = Math.pow(1-t, 2) * source.y + 
                   2 * (1-t) * t * CENTER_Y + 
                   Math.pow(t, 2) * target.y;

          const sourceZ = source.z;
          const targetZ = target.z;
          const currentZ = sourceZ + (targetZ - sourceZ) * t;
          const scale = 1 + (currentZ / 200);

          return (
            <g key={particle.id}>
              <circle
                cx={x}
                cy={y}
                r={particle.size * scale * 2}
                fill={particle.color}
                filter="url(#particleBlur)"
                className="mix-blend-screen opacity-30"
              />
              <circle
                cx={x}
                cy={y}
                r={particle.size * scale}
                fill={particle.color}
                className="mix-blend-screen"
              />
            </g>
          );
        })}

        {/* Nodes with enhanced depth effects */}
        {nodes.map(node => {
          const scale = 1 + (node.z / 200);
          const brightness = 50 + (node.z / 2);

          return (
            <g key={node.id} className="transition-all duration-500">
              {/* Node glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r={12 * scale}
                fill={`hsla(210, 70%, ${brightness}%, 0.3)`}
                filter="url(#glow)"
              />
              
              {/* Node core */}
              <circle
                cx={node.x}
                cy={node.y}
                r={6 * scale}
                fill={`hsla(210, 100%, ${brightness + 10}%, 0.8)`}
                className="mix-blend-screen"
              />
              
              {/* Active node pulse */}
              <circle
                cx={node.x}
                cy={node.y}
                r={9 * scale}
                fill="none"
                stroke={`hsla(210, 100%, ${brightness + 20}%, ${0.3 + Math.sin(rotation/20 + node.angle) * 0.2})`}
                strokeWidth={2}
                className="mix-blend-screen"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default TangleViz;