// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 500, height: 700 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  if (msg.type === 'export-frames') {
    const selection = figma.currentPage.selection.filter(node => node.type === 'FRAME');
    
    if (selection.length === 0) {
      figma.notify('Por favor selecciona al menos un frame');
      return;
    }

    const exportFrames = async () => {
      const frames = [];
      for (const node of selection) {
        try {
          const bytes = await node.exportAsync({
            format: 'JPG'
          });
          frames.push({
            name: node.name,
            bytes: Array.from(bytes)
          });
        } catch (error) {
          console.error('Error exporting frame:', error);
        }
      }
      
      figma.ui.postMessage({
        type: 'frames-exported',
        frames: frames
      });
    };

    exportFrames();
  }

  if (msg.type === 'generate-animation') {
    console.log('Animation data received:', msg.frames);
    
    // For now, just show the data in console and notify user
    const totalDuration = msg.frames.reduce((sum, frame) => sum + frame.duration, 0);
    const transitionCount = msg.frames.filter(frame => frame.transition !== 'none').length;
    
    figma.notify(`Animation: ${msg.frames.length} frames, ${totalDuration}ms, ${transitionCount} transitions`);
    
    // TODO: Send to backend for processing
    figma.ui.postMessage({
      type: 'animation-ready',
      data: {
        frames: msg.frames,
        totalDuration,
        transitionCount
      }
    });
  }


};