import React, {ChangeEvent} from 'react';
import './GuitarChordSheet.css';
export const GuitarChordSheet = () => {
    const initialLines: string[][] = [
        Array(16).fill(''), // First line for lyrics
        ...Array(6).fill(Array(16).fill('-')) // Remaining 6 lines for guitar chords
    ];
    const [lines, setLines] = React.useState<string[][]>(initialLines);

    const handleInputChange = (lineIndex: number, fretIndex: number, event: ChangeEvent<HTMLInputElement>) => {
        const newLines = lines.map((line, i) =>
            i === lineIndex ? line.map((fret, j) => j === fretIndex ? event.target.value : fret) : line
        );
        setLines(newLines);
    };

    return (
        <div className="chord-sheet">
            {lines.map((line, lineIndex) => (
                <div className="line" key={lineIndex}>
                    {line.map((fret, fretIndex) => (
                        <React.Fragment key={fretIndex}>
                            <input
                                type="text"
                                value={fret}
                                onChange={(e) => handleInputChange(lineIndex, fretIndex, e)}
                                maxLength={2}
                                className="fret-input"
                            />
                            {(fretIndex + 1) % 32 === 0 && fretIndex !== line.length - 1 && <span className="separator">|</span>}
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    );
}