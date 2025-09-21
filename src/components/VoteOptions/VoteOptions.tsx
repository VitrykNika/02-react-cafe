import css from './VoteOptions.module.css';

import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')} aria-label="Vote good">
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')} aria-label="Vote neutral">
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')} aria-label="Vote bad">
        Bad
      </button>

      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          type="button"
          onClick={onReset}
          
        >
          Reset
        </button>
      )}
    </div>
  );
}