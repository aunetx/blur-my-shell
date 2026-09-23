export function getRoundedCorners(selection) {
    return {
        corners_top: selection === 0 || selection === 1,
        corners_bottom: selection === 0 || selection === 2,
    };
}
