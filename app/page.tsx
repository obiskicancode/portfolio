import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'

interface GithubRepo {
  fork: boolean
}

async function getGithubRepoCount() {
  try {
    const res = await fetch('https://api.github.com/users/obiskicancode/repos?per_page=100', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return '7+'
    const repos: GithubRepo[] = await res.json()
    
    // Filter out forks to only count original repositories
    const originalRepos = repos.filter((repo) => !repo.fork)
    
    return originalRepos.length > 0 ? `${originalRepos.length}+` : '7+'
  } catch {
    return '7+'
  }
}

export default async function Home() {
  const repoCount = await getGithubRepoCount()

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection repoCount={repoCount} />
      <ProjectsSection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  )
}
