import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column";
import Image from "next/image";
import eyecatch from "images/about.jpg"
import Meta from "components/meta";

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
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>



    </Container >
  )
}
