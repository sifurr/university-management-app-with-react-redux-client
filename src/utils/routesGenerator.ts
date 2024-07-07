import { ReactNode } from "react";

type TRoute = {
    path: string;
    element: ReactNode;
  };

 type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
 } 

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((childItem) => {
        acc.push({
          path: childItem.path!, // not null assertion
          element: childItem.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
