"use client";

import { motion, useReducedMotion } from "framer-motion";

export function InfrastructureNodes() {
  const reduced = useReducedMotion();

  return (
    <div className="infra-container">
      <svg
        className="infra-nodes"
        viewBox="0 0 500 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="infra-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="infra-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
          </linearGradient>
          <filter id="infra-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subtle architectural grid lines */}
        <g className="infra-grid" stroke="currentColor" opacity="0.08" strokeWidth="1">
          <line x1="40" y1="40" x2="460" y2="40" />
          <line x1="40" y1="120" x2="460" y2="120" />
          <line x1="40" y1="200" x2="460" y2="200" />
          <line x1="40" y1="280" x2="460" y2="280" />
          <line x1="80" y1="20" x2="80" y2="300" />
          <line x1="200" y1="20" x2="200" y2="300" />
          <line x1="320" y1="20" x2="320" y2="300" />
          <line x1="440" y1="20" x2="440" y2="300" />
        </g>

        {/* Network connection paths */}
        <g className="infra-paths">
          <path d="M80 160 C 140 160, 150 90, 220 90 S 300 90, 360 140" className="infra-path" />
          <path d="M80 160 C 140 160, 160 230, 230 230 S 310 230, 360 140" className="infra-path" />
          <path d="M220 90 L 230 230" className="infra-path" />
          <path d="M360 140 C 400 140, 420 80, 440 80" className="infra-path" />
          <path d="M360 140 C 400 140, 420 220, 440 220" className="infra-path" />
        </g>

        {/* Glowing pulse rings around key hubs */}
        {!reduced && (
          <>
            <motion.circle
              cx="220"
              cy="90"
              r="24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="1.5"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx="360"
              cy="140"
              r="28"
              fill="none"
              stroke="#818cf8"
              strokeWidth="1.5"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 3.2, delay: 0.8, repeat: Infinity, ease: "easeOut" }}
            />
          </>
        )}

        {/* Core Architecture Nodes */}
        {[
          {
            cx: 80,
            cy: 160,
            r: 8,
            label: "Edge Ingress",
            badge: "TLS / CDN",
            fill: "url(#infra-grad-cyan)",
          },
          {
            cx: 220,
            cy: 90,
            r: 12,
            label: "K8s Control Plane",
            badge: "Multi-AZ",
            fill: "url(#infra-grad-cyan)",
          },
          {
            cx: 230,
            cy: 230,
            r: 10,
            label: "Data & Storage",
            badge: "Replicated",
            fill: "url(#infra-grad-purple)",
          },
          {
            cx: 360,
            cy: 140,
            r: 14,
            label: "Service Mesh",
            badge: "mTLS / Istio",
            fill: "url(#infra-grad-cyan)",
          },
          {
            cx: 440,
            cy: 80,
            r: 7,
            label: "Telemetry",
            badge: "Prometheus",
            fill: "url(#infra-grad-purple)",
          },
          {
            cx: 440,
            cy: 220,
            r: 7,
            label: "Cloud Workloads",
            badge: "Auto-scale",
            fill: "url(#infra-grad-cyan)",
          },
        ].map((node, i) => (
          <g key={node.label} className="infra-node-group">
            {/* Background pill card for node */}
            <rect
              x={node.cx - 52}
              y={node.cy + (node.cy > 180 ? -48 : 18)}
              width="104"
              height="28"
              rx="6"
              fill="#0f172a"
              fillOpacity="0.88"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x={node.cx}
              y={node.cy + (node.cy > 180 ? -36 : 30)}
              textAnchor="middle"
              fill="#f8fafc"
              fontSize="9"
              fontWeight="600"
              letterSpacing="0.02em"
            >
              {node.label}
            </text>
            <text
              x={node.cx}
              y={node.cy + (node.cy > 180 ? -25 : 41)}
              textAnchor="middle"
              fill="#2dd4bf"
              fontSize="7.5"
              fontWeight="500"
              letterSpacing="0.04em"
            >
              {node.badge}
            </text>

            {/* Node Circle */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.fill}
              className="infra-node"
              animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 2.4,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Inner center dot */}
            <circle cx={node.cx} cy={node.cy} r={Math.max(2, node.r / 3)} fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  );
}
