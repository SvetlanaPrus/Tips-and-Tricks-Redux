export const getStatus = (state) => {
    return state.sett.isSettingsOpen;
};

// V "rootReducer" ja nazvala reducer dlja settings kak "sett" ! Eto nado pomnit !
// V takom sluchae, nelzja vizivat po polnomu imeni redusera.
