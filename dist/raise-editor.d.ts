import { MutableRefObject } from 'react';
interface EditorProps {
    state: string;
    ref: MutableRefObject<HTMLTextAreaElement | null>;
}
export declare const useRaiseEditor: ({ state, ref }: EditorProps) => void;
interface LimitEnterEditorProps {
    event: React.ChangeEvent<HTMLTextAreaElement>;
    state: string;
    handler: (formattedText: string) => void;
}
export declare const handleLimitEnterEditor: ({ event, state, handler, }: LimitEnterEditorProps) => void;
export {};
