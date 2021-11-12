import { Button } from './Button'
import '../styles/sidebar.scss'

interface Genre {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

interface SideBarProps {
  genres: Genre[]
  selectedGenreId: number
  handleButtonClick: (id: number) => void
}

export function SideBar({
  genres,
  selectedGenreId,
  handleButtonClick,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleButtonClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
