'use client';

import React from 'react';
import parse, { DOMNode, Element, Text } from 'html-react-parser';

interface HighlightedTextProps {
    text: string;
}

const HighlightedText = ({ text }: HighlightedTextProps) => {
    const options = {
        replace: (node: DOMNode) => {
            if (node instanceof Element) {
                if (node.name === 'highlight') {
                    return (
                        <span className="bg-primary/10 px-1 rounded">
                            {node.children.map((child) => {
                                if (child instanceof Text) {
                                    return child.data; // Extract text data
                                }
                                if (child instanceof Element) {
                                    return parse(child.toString()); // Parse nested elements
                                }
                                return null;
                            })}
                        </span>
                    );
                } else if (node.name === 'focused') {
                    return (
                        <span className="text-primary font-normal">
                            {node.children.map((child) => {
                                if (child instanceof Text) {
                                    return child.data; // Extract text data
                                }
                                if (child instanceof Element) {
                                    return parse(child.toString()); // Parse nested elements
                                }
                                return null;
                            })}
                        </span>
                    );
                }
            }
        },
    };

    return <>{parse(text, options)}</>;
};

export default HighlightedText;