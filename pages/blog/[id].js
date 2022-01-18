import axios from "axios";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const data = [
    { id: 0, content: "content 1" },
    { id: 1, content: "content 2" },
    { id: 2, content: "content 3" },
    { id: 3, content: "content 5" },
    { id: 4, content: "content 6" },
  ];
  const posts = data;

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}

export default function handler({ params }) {
  return (
    <Layout background={"black"}>
      <div className="text-white text-center font-bold text-3xl">
        <div className="relative flex justify-center ">
          <div className="head-img w-full aspect bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">image 1</div>
          <div className="absolute board w-3/4 md:w-1/2 h-60 md:h-72 rounded-xl  aspect bg-red-700 flex items-center justify-center">image 2</div>
        </div>
        <div className="text-white text-left pt-36 sm:pt-44 lg:pt-56">
          <div className="py-8 w-full md:border border-gray-700 rounded h-auto md:w-11/12 lg:w-3/4 mx-auto">
            <h1 className="pl-6">Blog Post {params.id}</h1>
            <p className="text-base p-6 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              accumsan leo quis purus tempus, ut viverra dolor ultricies. Mauris
              eget nisl id nibh ullamcorper cursus et nec leo. Sed non lacinia
              ante. Cras sapien lorem, pharetra ac feugiat non, viverra a nulla.
              Praesent et turpis placerat, scelerisque ligula efficitur,
              pellentesque lorem. Quisque faucibus sed tellus non sollicitudin.
              Donec sed lacinia nisi. Curabitur eu neque id ante gravida ornare.
              Maecenas euismod rhoncus mauris, vitae dignissim libero eleifend
              rhoncus. Praesent pretium ipsum vitae libero viverra fringilla.
              Nullam et sollicitudin tortor. Sed at nisi in lorem maximus
              malesuada eu nec sem. Suspendisse accumsan ac odio sed malesuada.
              Donec id erat sed metus faucibus efficitur ut id eros. Donec
              tincidunt euismod nunc nec luctus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Pellentesque ipsum libero, egestas
              quis erat ut, vulputate vehicula ligula. Donec vel erat eleifend,
              luctus nisi nec, gravida lorem. Maecenas faucibus a elit nec
              malesuada. Donec id erat et felis gravida aliquam quis eget erat.
              Ut congue ultrices nisl id mollis. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Quisque
              ornare laoreet cursus. Nunc dictum ullamcorper interdum. Maecenas
              laoreet elementum commodo. Phasellus tempus lorem nec ligula
              luctus mattis. Suspendisse condimentum rutrum ligula, a varius
              augue fringilla et. Ut vestibulum imperdiet arcu, consectetur
              rutrum enim sollicitudin eu. Vestibulum quis ipsum nunc. Nunc
              vitae ante vitae sapien blandit ornare. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. In vehicula neque ut augue interdum, at hendrerit justo
              congue. Donec interdum non nulla quis venenatis. Pellentesque non
              dolor vitae erat euismod varius eget faucibus velit. Fusce
              tincidunt ligula nibh, at eleifend augue porta in. Etiam dictum
              viverra nulla, non tincidunt tortor porttitor congue. Ut in
              facilisis justo. Pellentesque viverra nunc ut leo mollis
              ullamcorper. Vestibulum ex erat, sagittis id erat sit amet,
              pellentesque rutrum metus. Pellentesque condimentum velit eget
              libero dictum, ac dictum dolor gravida. Maecenas commodo dui sit
              amet mauris lobortis dignissim. Aliquam interdum volutpat
              pellentesque. Proin suscipit mauris viverra velit feugiat
              consequat. Cras venenatis pretium enim id mattis. Cras volutpat
              aliquam nisl venenatis imperdiet. Nam aliquam ac odio a ultrices.
              Donec vitae finibus lectus. Cras rutrum elementum odio id
              interdum. Curabitur ultrices ante nec augue sagittis laoreet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Cras tempus nunc orci, vel
              venenatis elit interdum sed. Integer lacinia dui lorem, ut blandit
              massa commodo at. Vivamus sollicitudin mauris molestie purus
              finibus porta. Suspendisse commodo, ante vel imperdiet bibendum,
              velit nulla ultricies odio, ut porttitor eros lacus ac felis. Sed
              vehicula nulla leo, a auctor arcu viverra a. Etiam turpis justo,
              euismod posuere pharetra id, bibendum egestas ipsum. Donec
              pulvinar aliquam tortor vitae ornare. Maecenas ac enim venenatis
              lacus volutpat pretium. Vivamus in ullamcorper massa. Sed
              malesuada, sem eu venenatis aliquet, ex leo blandit mauris, sit
              amet pulvinar nunc nunc quis eros.
            </p>
            <hr className="w-3/4 mx-auto"/>
            <p className="text-lg pr-8 pt-4 font-medium text-right">
              Ahmad bababoi
            </p>
            <p className="text-base pr-8 font-light text-right">- written by</p>
          </div>
        </div>
      </div>
      ;
      <style jsx>{`
        .head-img {
          height: 50vh;
        }
        .board {
          top: 30vh;
        }
      `}</style>
    </Layout>
  );
}
