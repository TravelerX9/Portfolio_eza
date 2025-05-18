'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
            <Button asChild className='mt-3 w-full'>
              <SheetClose asChild>
                <Link href='#contact'>Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
