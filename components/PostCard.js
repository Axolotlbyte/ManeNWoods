import Link from "next/link";

export default function PostCard({id}) {
    const prevText = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
  return (
    <Link key={id} href={"/blog/" + id}>
    <a className="cursor-pointer relative overflow-hidden w-full aspect rounded-xl border hover:shadow-lg shadow-gray-400">
      <div className="w-full h-2/5 bg-gradient-to-r from-teal-700 to-cyan-600"></div>
      <h1 className="pl-4 pt-2 text-3xl font-bold">Blog Post heading</h1>
      <p className="p-4">{prevText.length < 150? prevText : prevText.substring(0,150)}...</p>
      <div className="absolute flex items-center w-full h10per bottom-0">
        <div className="ml-4 h-12 w-12 lg:h-8 lg:w-8 rounded-full bg-gradient-to-tl from-orange-500 to-sky-400"></div>
        <span className="flex flex-col font-semibold text-lg md:text-base px-4">Ahmad bababoi<small className=" font-light ">Posted by</small></span>
      </div>
      <style jsx>{`
        .h10per {
          height: 10%;
        }
        .aspect {
          aspect-ratio: 1/1.3;
        }
      `}</style>
    </a>
    </Link>
  );
}
