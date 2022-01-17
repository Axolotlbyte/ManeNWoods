const data = [
    {id: 0, content: "content 1"},
    {id: 1, content: "content 2"},
    {id: 2, content: "content 3"},
    {id: 3, content: "content 5"},
    {id: 4, content: "content 6"},
]

export default function handler (req,res) {
    res.status(200).json({data})
}