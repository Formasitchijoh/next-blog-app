import { GlobeAltIcon, TrophyIcon,PowerIcon} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/posts/fonts';
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <PowerIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[30px] ">TC-Blog</p>
    </div>
  );
}