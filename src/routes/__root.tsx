import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
  component: () => {
    <>
    <div>
      <Link to="/">Главная</Link>
    </div>
    <hr />
    <Outlet/>
    <TanStackRouterDevtools />
    </>
  }
})