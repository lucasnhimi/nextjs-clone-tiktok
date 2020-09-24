import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';
import { openDB } from '../lib/openDB';

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // implementar a busca dos dados no mongodb
  const db = await openDB();
  const data = await db.collection('feed').find().toArray();

  // const data = [
  //   {
  //     id: 1,
  //     author: {
  //       id: 1,
  //       avatar:
  //         'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
  //       name: 'Lucas Nhimi',
  //       username: 'lucasnhimi',
  //     },
  //     description: '',
  //     tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
  //     songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
  //     videoUrl:
  //       'https://v16-web-newkey.tiktokcdn.com/19121f05fbed4c4e63a61c79aab3fcea/5f6cf21d/video/tos/alisg/tos-alisg-pve-0037c001/e6da6a1fbf1f4d798e3498ea13aca32b/?a=1988&br=2314&bt=1157&cr=0&cs=0&dr=0&ds=3&er=&l=2020092413230501018907422533020866&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Zpdjx1andydzMzOzczM0ApZ2dkaTwzNWQ3NzhmaTw1N2dkaGVhY2k0XmlfLS0zMTRzcy0xYGJfNDBfYzVfYy5eMzA6Yw%3D%3D&vl=&vr=',
  //     likes: 650,
  //     comments: 10,
  //     replies: 50,
  //   },
  //   {
  //     id: 2,
  //     author: {
  //       id: 1,
  //       avatar:
  //         'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
  //       name: 'Lucas Nhimi',
  //       username: 'lucasnhimi',
  //     },
  //     description: 'Vídeo teste para clone de interface',
  //     tags: [{ title: '#youtube' }, { title: '#clone' }],
  //     songName: 'Tampa Curhat Beat - TampaCurhat',
  //     videoUrl:
  //       'https://v16-web-newkey.tiktokcdn.com/377f706b8664a2b3c68420b8740c311c/5f6cf201/video/tos/alisg/tos-alisg-pve-0037c001/9fb4d52876d340eda534984097fb7d1b/?a=1988&br=1726&bt=863&cr=0&cs=0&dr=0&ds=3&er=&l=202009241322340101890710710A01D2D5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajpsM2g7Zm9ydzMzMzczM0ApZDQ4OGY5ZWQ5NzUzOTlnOGdyMjQ1X3FgYGlfLS0tMTRzc2FjYjUyXy8yMy5hMDUyMDY6Yw%3D%3D&vl=&vr=',
  //     likes: 650,
  //     comments: 10,
  //     replies: 50,
  //   },
  // ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;
