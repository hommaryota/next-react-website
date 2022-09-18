import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column";
import Image from "next/image";
// import eyecatch from "images/about.jpg"
import Meta from "components/meta";
import Accordion from "components/accordion";

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/4078255b8bf44279b739a86d1384e4ef/d024291266f94c3d8e47e670f69bebdf/eyecatch.jpg',
  height: 960,
  width: 1920,
  blurDataURL: 'data:image/jpeg;base64'
}


export default function About() {
  return (
    <Container>
      <Meta
        pageTitle={"アバウト"}
        pageDesc={"About development activities"}
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero
        title="About"
        subtitle='About development activities'
      />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width:1152px) 1152px,100vw"
          priority
          placeholder="blur"
        />
      </figure>


      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>CUBEが得意とする分野はモノづくりです。</p>
            <h2>モノづくりで目指していること</h2>
            <p>モノづくりではデータの分析からクリエイティブまで幅広いことを担当しています。</p>
            <h2>新しいことへのチャレンジ</h2>
            <p>今までと違うことを取り入れることで愛着が沸きます。</p>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作る事です。楽しいことから思いつき、目標とゴールを決め、そこに向かって様々な課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>

            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読みとってこそ古代の世界観が理解できます。
              </p>
            </Accordion>

            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>



    </Container >
  )
}
