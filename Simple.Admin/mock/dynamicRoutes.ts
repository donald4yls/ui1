import { Request, Response } from 'express';


const getRouteData = (req: Request, res: Response) => {
  console.log('here.....');
  res.send({
    success: true,
    data: [
            {
              id: 1,
              menuId: "dashboard",
              parentId: "",
              enable: true,
              name: "仪表盘",
              sort: 1000,
              path: "/dashboard",
              direct: true,
              createdAt: "1992-08-17 07:29:03"
            },
            {
              id: 2,
              menuId: "system_management",
              parentId: "",
              enable: true,
              name: "系统管理",
              sort: 2000,
              path: "/system",
              direct: false,
              createdAt: "2011-01-21 09:25:49"
            }
          ]
  });
}

export default {
    'POST /api/system/routes': getRouteData
  }
