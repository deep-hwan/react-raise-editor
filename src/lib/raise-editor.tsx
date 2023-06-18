import { useEffect, MutableRefObject } from 'react';

interface EditorProps {
  state: string;
  ref: MutableRefObject<HTMLTextAreaElement | null>;
}

//
/// Editor > Adjust Editor Height
//
export const useRaiseEditor = ({ state, ref }: EditorProps): void => {
  useEffect(() => {
    if (state && state !== '' && ref && ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    } else if (ref && ref.current) {
      ref.current.style.height = 'auto';
    }
  }, [state, ref]);
};

interface LimitEnterEditorProps {
  event: React.ChangeEvent<HTMLTextAreaElement>;
  state: string;
  handler: (formattedText: string) => void;
}

//
/// Editor > Prevent indiscriminate paragraph spacing
//
export const handleLimitEnterEditor = ({
  event,
  state,
  handler,
}: LimitEnterEditorProps): void => {
  const inputValue = event.target.value;
  const formattedText = inputValue.replace(/(\r\n|\r|\n){2,}/g, '\n');
  handler(formattedText);

  if (state === '') {
    handler(event.target.value.trim());
  } else {
    handler(formattedText);
  }
};
