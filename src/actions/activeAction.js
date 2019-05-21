export const ACTIVE = "ACTIVE"

const swtichItem = (active) => {
    return {
        type: ACTIVE,
        payload: {active}
    };
}

export default swtichItem;

