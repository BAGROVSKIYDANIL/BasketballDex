import AppHeader from "../navigaton/AppHeader"
import LeftBlockMenu from "../menuburger/LeftBlockMenu"

export const Layout = ({children} : any ) =>
{
  return(
    <div className="app">
      <AppHeader/>
      <main>
        <LeftBlockMenu/>
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  )
}