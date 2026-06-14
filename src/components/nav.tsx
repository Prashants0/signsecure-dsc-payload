import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const features: { title: string; href: string; description: string }[] = [
  {
    title: "Class 3 DSC",
    href: "/class-3-digital-signature",
    description:
      "Class 3 DSC for ITR, GST, MCA, TDS, Trademark, E-Tender, etc.",
  },
  {
    title: "Document Signer Certificate",
    href: "/document-signer-certificate",
    description: "For Bulk Document Signing",
  },
  {
    title: "DGFT DSC",
    href: "/dgft-dsc",
    description: "For Import and Export Submission",
  },
  {
    title: "DSC Token",
    href: "dsc-token",
    description: "Store your DSC securely",
  },
];

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full  bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={80}
            height={40}
            className="w-20 h-16"
          />
        </Link>
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#about-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + "font-bold"}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {features.map((feature) => (
                <ListItem
                  key={feature.title}
                  title={feature.title}
                  href={feature.href}
                >
                  {feature.description}
                </ListItem>
              ))}
            </ul>
            <div className="flex flex-col px-4 pb-2">
              <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <Link
                  href="https://signsecure.in"
                  className="text-lg font-bold"
                >
                  <h2 className="text-sm xl:text-base font-bold leading-none">
                    PDF Signing Solutions
                  </h2>
                  <p className="line-clamp-2 text-xs xl:text-sm leading-snug text-muted-foreground">
                    Sign Bulk Documents Digitally with our PDF Signing Solutions
                  </p>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/#about-us" className="text-lg font-bold">
        About Us
      </Link>
      <Link href="/pricing" className="text-lg font-bold">
        Pricing
      </Link>
      <Link href="/#contact" className="text-lg font-bold">
        Contact Us
      </Link>
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Products</h2>
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="block text-sm"
          >
            {feature.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm xl:text-base font-bold leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-xs xl:text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
