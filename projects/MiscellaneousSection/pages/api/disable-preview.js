export default function handler(req, res) {
    res.clearPreviewData({ user: "hossein" })
    res.end("Preview mode disabled")
}