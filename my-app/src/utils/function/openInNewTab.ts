export const openInNewTab = (url: string): void => {
    window.open(`https://${url}`, '_blank')
}