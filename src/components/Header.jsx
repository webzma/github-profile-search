import SearchInput from "./SearchInput"

export default function Header() {
  return (
    <header className="relative w-full flex justify-center">
      <img src="/hero-image-github-profile.png" alt="github background image" />
      <SearchInput />
    </header>
  )
}
