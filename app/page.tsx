import { Post } from './interfaces/post';
import { fakePosts } from './constants/data';
import { Hero } from './components/home/Hero/Hero';
import { Aside } from './components/layouts/Content/Aside';
import { SectionLine } from './components/common/SectionLine';
import { Section } from './components/common/Section/Section';
import { Content } from './components/layouts/Content/Content';
import { PostResume } from './components/post/PostResume/PostResume';
import { Container } from './components/layouts/Container/Container';
import { SectionTitle } from './components/common/Section/SectionTitle';
import { DisplayContainer } from './components/layouts/Content/DisplayContainer';
import { PostMostViewed } from './components/post/PostMostViewed/PostMostViewed';
import { LandingNavBar } from './components/layouts/NavBar/LandingNavBar/LandingNavBar';

export default function Home() {
  return (
    <main>
      <LandingNavBar />
      <Hero />

      <Container>
        <Section>
          <SectionTitle>Most viewed</SectionTitle>
          <div className="grid grid-cols-3 gap-20">
            {[1, 2, 3, 4, 5, 6].map((n) => <PostMostViewed key={n} index={n} />)}
          </div>
        </Section>

        <SectionLine />

        <DisplayContainer>
          <Content>
            <Section>
              <div className="flex flex-col gap-10">
                {fakePosts.map((post: Post) => <PostResume key={post.id} post={post} />)}
              </div>
            </Section>
          </Content>
          <Aside>
          </Aside>
        </DisplayContainer>
      </Container>
    </main>
  )
}
