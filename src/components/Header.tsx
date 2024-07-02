//import { Icon } from '@/components/Icon';
import { VsMenu } from 'solid-icons/vs';
import { A } from '@solidjs/router';

const Header = () => (
  <nav class='flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <span class='md:pl-3 pl-3 text-[34px] subpixel-antialiased font-light text-primary-700 shadow-none flex items-center'>
      Curso&nbsp;
      <span class='z-10 text-primary-500  font-black drop-shadow-logo'>
        SOLIDSTART
      </span>
    </span>

    <A href='/menu' class='md:hidden flex flex-1 justify-end md:pr-8 pr-3'>
      <VsMenu size='40px' color='#75ABC7' />
    </A>
  </nav>
);

export default Header;
