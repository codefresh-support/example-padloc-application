import { css } from "lit-element";
import { fullbleed } from "./mixins";

export const layout = css`
    .fullbleed {
        ${fullbleed()}
    }

    /** FLEX LAYOUT */

    .layout {
        display: flex;
    }

    .layout.inline {
        display: inline-flex;
    }

    .layout.vertical {
        flex-direction: column;
    }

    .layout.horizontal {
        flex-direction: row;
    }

    .layout.center-aligning {
        align-items: center;
    }

    .layout.start-aligning {
        align-items: start;
    }

    .layout.end-aligning {
        align-items: end;
    }

    .layout.center-justifying {
        justify-content: center;
    }

    .layout.start-justifying {
        justify-content: start;
    }

    .layout.end-justifying {
        justify-content: end;
    }

    .layout.centering {
        align-items: center;
        justify-content: center;
    }

    .stretch,
    .layout.stretching > * {
        flex-grow: 1;
    }

    .layout:not(.stretching) > :not(.stretch) {
        flex: none;
    }

    .layout.horizontal.stretching.evenly > *,
    .layout.horizontal > .collapse {
        width: 0;
    }

    .layout.vertical.stretching.evenly > *,
    .layout.vertical > .collapse {
        height: 0;
    }

    .layout.horizontal.spacing > :not(:last-child) {
        margin-right: var(--spacing);
    }

    .layout.vertical.spacing > :not(:last-child) {
        margin-bottom: var(--spacing);
    }

    .relative {
        position: relative;
    }

    .padded {
        padding: var(--spacing);
    }

    .vertically-padded {
        padding-top: var(--spacing);
        padding-bottom: var(--spacing);
    }

    .horizontally-padded {
        padding-left: var(--spacing);
        padding-right: var(--spacing);
    }

    .double-padded {
        padding: calc(2 * var(--spacing));
    }

    .margined {
        margin: var(--spacing);
    }

    .vertically-margined {
        margin-top: var(--spacing);
        margin-bottom: var(--spacing);
    }

    .horizontally-margined {
        margin-left: var(--spacing);
        margin-right: var(--spacing);
    }

    .double-margined {
        margin: calc(2 * var(--spacing));
    }

    .half-margined {
        margin: calc(0.5 * var(--spacing));
    }

    .spacer {
        min-height: var(--spacing);
        min-width: var(--spacing);
    }

    .fit {
        max-width: 100%;
        max-height: 100%;
    }

    .scrolling {
        overflow: auto;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--grid-min-column-width, 10em), 1fr));
        grid-gap: var(--spacing);
    }

    .layout.pane {
        flex-direction: row;
    }

    .layout.pane > :first-child {
        width: 100%;
        max-width: var(--pane-left-width, 25em);
        border-right: solid 1px var(--border-color);
    }

    .layout.pane > :last-child {
        flex: 1;
    }

    @media (max-width: 700px) {
        .layout.pane > :first-child {
            ${fullbleed()};
            max-width: unset;
            border: none;
            will-change: transform;
            transition: transform 0.3s;
        }

        .layout.pane > :last-child {
            ${fullbleed()};
            z-index: 1;
            will-change: transform;
            transition: transform 0.3s;
            box-shadow: rgba(0, 0, 0, 0.3) -1px 0 6px -3px;
        }

        .layout.pane.open > :first-child {
            transform: translateX(-50%);
        }

        .layout.pane:not(.open) > :last-child {
            transform: translateX(calc(100% + 6px));
        }
    }
`;
