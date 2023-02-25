import { useEffect } from "react";

const Header = ({handleNewGame, wins}) => {

  useEffect(() => (document.title = `${wins} wins`), [wins])

  return (
    <header className="header">
      <h4>{wins} wins</h4>
    </header>
  )
}

export default Header