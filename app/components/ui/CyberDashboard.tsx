'use client';

import React, { useState, useEffect } from 'react';

interface SystemStats {
  cpu: number;
  memory: number;
  network: number;
  threats: number;
  uptime: string;
}

interface ActivityLog {
  id: number;
  time: string;
  action: string;
  status: 'success' | 'warning' | 'error';
}

interface CyberDashboardProps {
  isVisible?: boolean;
  isFullscreen?: boolean;
  onClose?: () => void;
  onToggleFullscreen?: () => void;
}

const CyberDashboard: React.FC<CyberDashboardProps> = ({
  isVisible = false,
  isFullscreen = false,
  onClose,
  onToggleFullscreen
}) => {
  const [stats, setStats] = useState<SystemStats>({
    cpu: 45,
    memory: 67,
    network: 89,
    threats: 0,
    uptime: '00:00:00'
  });
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    // Simular estadísticas en tiempo real
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        cpu: Math.max(20, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(85, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(60, Math.min(100, prev.network + (Math.random() - 0.5) * 15)),
        threats: Math.random() < 0.95 ? 0 : Math.floor(Math.random() * 3)
      }));
    }, 2000);

    // Simular logs de actividad
    const logInterval = setInterval(() => {
      const actions = [
        'Portfolio accessed',
        'Section navigation',
        'Skill card analyzed', 
        'Contact form viewed',
        'CV download initiated',
        'GitHub profile checked',
        'LinkedIn connection',
        'Security scan complete'
      ];
      
      const statuses: ('success' | 'warning' | 'error')[] = ['success', 'success', 'warning', 'success'];
      
      const newLog: ActivityLog = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        action: actions[Math.floor(Math.random() * actions.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)]
      };

      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    }, 3000);

    // Simular progreso de escaneo
    const scanInterval = setInterval(() => {
      setScanProgress(prev => prev >= 100 ? 0 : prev + Math.random() * 15);
    }, 500);

    // Uptime contador
    const uptimeInterval = setInterval(() => {
      const start = new Date().getTime();
      const elapsed = new Date().getTime() - start;
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      setStats(prev => ({
        ...prev,
        uptime: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      }));
    }, 1000);

    return () => {
      clearInterval(statsInterval);
      clearInterval(logInterval);
      clearInterval(scanInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-cyber-green';
      case 'warning': return 'text-cyber-orange';
      case 'error': return 'text-red-500';
      default: return 'text-cyber-cyan';
    }
  };

  const getProgressColor = (value: number) => {
    if (value < 50) return 'cyber-green';
    if (value < 80) return 'cyber-orange';
    return 'red-500';
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[9999] bg-cyber-surface border border-cyber-cyan p-2 rounded-lg hover:bg-cyber-cyan/10 transition-all duration-300 group"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <div className="w-6 h-6 relative">
          <div className="absolute inset-0 border border-cyber-cyan rounded group-hover:border-cyber-magenta transition-colors duration-300">
            <div className="w-1 h-1 bg-cyber-cyan rounded-full absolute top-1 left-1 animate-ping"></div>
            <div className="w-1 h-1 bg-cyber-cyan rounded-full absolute top-1 right-1"></div>
            <div className="w-1 h-1 bg-cyber-cyan rounded-full absolute bottom-1 left-1"></div>
            <div className="w-1 h-1 bg-cyber-cyan rounded-full absolute bottom-1 right-1 animate-pulse"></div>
          </div>
        </div>
      </button>

      {/* Dashboard Panel */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-black/90 border-l border-cyber-cyan z-[9998] transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ backdropFilter: 'blur(15px)' }}>
        
        {/* Header */}
        <div className="p-4 border-b border-cyber-cyan/30">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-cyber-cyan font-mono text-lg font-bold">CYBER_DASHBOARD.exe</h2>
            <div className="flex space-x-2">
              <button 
                onClick={onToggleFullscreen}
                className="w-6 h-6 border border-cyber-cyan/50 hover:border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-200 text-xs"
                title="Toggle Fullscreen (F11)"
              >
                ⛶
              </button>
              <button 
                onClick={onClose}
                className="w-6 h-6 border border-red-500/50 hover:border-red-500 text-red-500 hover:bg-red-500/10 transition-all duration-200 text-xs"
                title="Close Dashboard (Escape)"
              >
                ×
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
            <span className="text-cyber-green text-xs font-mono">SYSTEM_ONLINE</span>
          </div>
        </div>

        {/* System Stats */}
        <div className="p-4 border-b border-cyber-cyan/30">
          <h3 className="text-cyber-cyan font-mono text-sm mb-3">SYSTEM METRICS</h3>
          
          {/* CPU */}
          <div className="mb-3">
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white">CPU_USAGE</span>
              <span className={`text-${getProgressColor(stats.cpu)}`}>{stats.cpu.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-cyber-surface h-1 rounded">
              <div 
                className={`h-1 bg-${getProgressColor(stats.cpu)} rounded transition-all duration-500`}
                style={{ width: `${stats.cpu}%` }}
              />
            </div>
          </div>

          {/* Memory */}
          <div className="mb-3">
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white">MEMORY</span>
              <span className={`text-${getProgressColor(stats.memory)}`}>{stats.memory.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-cyber-surface h-1 rounded">
              <div 
                className={`h-1 bg-${getProgressColor(stats.memory)} rounded transition-all duration-500`}
                style={{ width: `${stats.memory}%` }}
              />
            </div>
          </div>

          {/* Network */}
          <div className="mb-3">
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white">NETWORK</span>
              <span className="text-cyber-green">{stats.network.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-cyber-surface h-1 rounded">
              <div 
                className="h-1 bg-cyber-green rounded transition-all duration-500"
                style={{ width: `${stats.network}%` }}
              />
            </div>
          </div>

          {/* Threats */}
          <div className="flex justify-between text-xs font-mono">
            <span className="text-white">THREATS_DETECTED</span>
            <span className={stats.threats > 0 ? 'text-red-500 animate-pulse' : 'text-cyber-green'}>
              {stats.threats}
            </span>
          </div>
        </div>

        {/* Scan Progress */}
        <div className="p-4 border-b border-cyber-cyan/30">
          <h3 className="text-cyber-cyan font-mono text-sm mb-3">SECURITY_SCAN</h3>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-white">PROGRESS</span>
            <span className="text-cyber-cyan">{scanProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-cyber-surface h-2 rounded mb-2">
            <div 
              className="h-2 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded transition-all duration-300"
              style={{ width: `${Math.min(100, scanProgress)}%` }}
            />
          </div>
          <div className="text-xs font-mono text-gray-400">
            {scanProgress < 100 ? 'Scanning portfolio components...' : 'Scan complete. No threats found.'}
          </div>
        </div>

        {/* Activity Logs */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="text-cyber-cyan font-mono text-sm mb-3">ACTIVITY_LOG</h3>
          <div className="space-y-2">
            {logs.map((log) => (
              <div key={log.id} className="flex items-center space-x-2 text-xs font-mono">
                <span className="text-gray-400">{log.time}</span>
                <div className={`w-2 h-2 rounded-full ${
                  log.status === 'success' ? 'bg-cyber-green' :
                  log.status === 'warning' ? 'bg-cyber-orange' : 'bg-red-500'
                }`} />
                <span className={getStatusColor(log.status)}>{log.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-cyber-cyan/30">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-white">UPTIME</span>
            <span className="text-cyber-green">{stats.uptime}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberDashboard;
