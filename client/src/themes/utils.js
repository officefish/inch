export function applyTheme(theme) {
    const root = document.documentElement;
    Object.keys(theme).forEach((cssVar) => {
        root.style.setProperty(cssVar, theme[cssVar]);
    });
}

export function createTheme({
                                primary,
                                primaryLight,
                                primaryDark,
                                secondary,
                                secondaryLight,
                                secondaryDark,
                                negative,
                                negativeLight,
                                negativeDark,
                                positive,
                                positiveLight,
                                positiveDark,
                                primaryBackground,
                                primaryBackgroundLight,
                                primaryBackgroundDark,
                                secondaryBackground,
                                secondaryBackgroundLight,
                                secondaryBackgroundDark,
                                primaryText,
                                primaryTextLight,
                                primaryTextDark,
                                secondaryText,
                                secondaryTextLight,
                                secondaryTextDark
                            }) {
    return {
        "--theme-primary": primary,
        "--theme-primary-light": primaryLight,
        "--theme-primary-dark": primaryDark,
        "--theme-secondary": secondary,
        "--theme-secondary-light": secondaryLight,
        "--theme-secondary-dark": secondaryDark,
        "--theme-negative": negative,
        "--theme-negative-light": negativeLight,
        "--theme-negative-dark": negativeDark,
        "--theme-positive": positive,
        "--theme-positive-light": positiveLight,
        "--theme-positive-dark": positiveDark,
        "--theme-background-primary": primaryBackground,
        "--theme-background-primary-light": primaryBackgroundLight,
        "--theme-background-primary-dark": primaryBackgroundDark,
        "--theme-background-secondary": secondaryBackground,
        "--theme-background-secondary-light": secondaryBackgroundLight,
        "--theme-background-secondary-dark": secondaryBackgroundDark,
        "--theme-text-primary": primaryText,
        "--theme-text-primary-light": primaryTextLight,
        "--theme-text-primary-dark": primaryTextDark,
        "--theme-text-secondary": secondaryText,
        "--theme-text-secondary-light": secondaryTextLight,
        "--theme-text-secondary-dark": secondaryTextDark,
    };
}
//
//
//
//     'primary-text': 'var(--theme-text-primary)',
//     'primary-text-light': 'var(--theme-text-primary-light)',
//     'primary-text-dark': 'var(--theme-text-primary-dark)',
//     'secondary-text': 'var(--theme-text-secondary)',
//     'secondary-text-light': 'var(--theme-text-secondary-light)',
//     'secondary-text-dark': 'var(--theme-text-secondary-dark)',