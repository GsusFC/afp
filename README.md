# AnimaGen Figma Plugin

A professional Figma plugin for exporting frames and generating animated GIFs, MP4s, and WebM videos with custom transitions.

## Features

- **Frame Export**: Export selected Figma frames as JPEG images
- **Multiple Formats**: Generate GIF, MP4, or WebM animations
- **Custom Transitions**: Add fade, slide, or no transitions between frames
- **Duration Control**: Set individual frame durations (1-5 seconds)
- **Frame Management**: Reorder frames with up/down arrows
- **Real-time Preview**: Preview generated animations before download
- **Backend Integration**: Powered by AnimaGen backend with FFmpeg processing

## Installation

1. Download the plugin files
2. In Figma, go to `Plugins > Development > Import plugin from manifest...`
3. Select the `manifest.json` file from the `figma-plugin` folder
4. The plugin will appear in your development plugins

## Usage

1. **Select Frames**: Select the frames you want to animate in Figma
2. **Export Frames**: Click "Export Selected Frames" to capture and convert to JPEG
3. **Configure Animation**: 
   - Reorder frames using ↑↓ arrows
   - Set duration for each frame (1-5 seconds)
   - Choose transitions (None, Fade, Slide)
   - Select output format (GIF, MP4, WebM)
4. **Generate**: Click "Generate Animation" to process
5. **Preview & Download**: Preview the result and download your animation

## Project Structure

```
figma-plugin/
├── manifest.json     # Plugin configuration
├── code.js          # Main plugin logic
└── ui.html          # User interface
```

## Backend Integration

This plugin integrates with the AnimaGen backend for professional animation processing:

- **Upload Endpoint**: `POST /upload?sessionId=X`
- **GIF Export**: `POST /export/gif`
- **Video Export**: `POST /export/video`
- **Download**: `GET /download/:filename`

## Development

The plugin uses:
- **Figma Plugin API** for frame export and communication
- **Figma Plugin Design System** for native UI components
- **Pure HTML/CSS/JavaScript** (no build process required)
- **Backend integration** for professional animation processing

## Technical Details

- **Image Format**: Frames exported as JPEG (80% quality) for optimal file size
- **UI Framework**: Figma Plugin DS for native look and feel
- **Communication**: Plugin ↔ UI ↔ Backend via message passing
- **Animation Processing**: FFmpeg-powered backend for high-quality output
- **Responsive Design**: Optimized for Figma plugin constraints

## License

MIT License

---

Built with ❤️ for the Figma community