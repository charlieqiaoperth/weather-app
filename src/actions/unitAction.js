export const SWITCH_UNIT = "SWITCH_UNIT";

const switchUnit = (unit) => {
    return {
        type: SWITCH_UNIT,
        payload: {unit}
    };
}

export default switchUnit;
