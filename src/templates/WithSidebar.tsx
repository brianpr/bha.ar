import React, { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Footer } from './Footer';

const WithSidebar = (props: { children?: ReactNode }) => (
  <div>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>sdasfas</SheetDescription>
        </SheetHeader>
        <div>
          <h2>hola</h2>
        </div>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    {props.children}

    <Footer />

    {/* <Meta title={AppConfig.title} description={AppConfig.description} />

    <Navbar logo={<Logo />} />

    <div className="content">
      {props.children}

      <Footer />
    </div>

    <style jsx>
      {`
        .content {
          margin-left: 250px;
          padding: 20px;
        }
      `}
    </style> */}
  </div>
);

export { WithSidebar };
