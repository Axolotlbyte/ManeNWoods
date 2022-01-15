export default function LatestPost(){
    const prevText = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
    return (
        <div className="border hover:shadow-xl rounded-xl overflow-hidden mt-5 w-11/12 h-50vh grid md:grid-cols-2 mx-auto aspect">
            <div className="md:h-full bg-gradient-to-l from-sky-500 to-indigo-600"></div>
            <div>
                <h1 className="text-2xl font-bold px-2 pt-4 lg:text-4xl">Blog Post Heading</h1>
                <p className="p-2">{prevText.length < 150? prevText : prevText.substring(0,150)}...</p>
            </div>
        <style jsx>{`
            .h-50vh{
                height: 60vh
            }
        `}</style>
        </div>
    )
}