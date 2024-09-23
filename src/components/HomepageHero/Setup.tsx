import styles from '@/components/HomepageHero/SetupHero.module.scss';
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash';
import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { LinkPreview } from '@/components/ui/link-preview';
import { useLocale } from '@/hooks';
import Link from 'next/link';

interface Props {}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale();

  return (
    <div className={styles.container}>
      {/* <div className={styles.tilesBox}></div> */}
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href='https://discord.com/invite/ZMTPBdxw2W'
            target='_blank'
            rel='noopener noreferrer'>
            {t('badgeTitle')}
          </a>
        </div>
        <h1 className={styles.headline}>
          <MotionWrapperFlash className='flex items-center'>
            <span className='icon-[emojione-v1--lightning-mood]'></span>
          </MotionWrapperFlash>{' '}
          Ibuidl <br className='sm:hidden'></br> Wiki
          <br className='sm:hidden'></br>{' '}
        </h1>
        <div className={styles.subtitle}>
          学习周期 <FlipWords words={['快', '简单', '前沿', '弹性大']} />
          <br />
          提供{' '}
          <LinkPreview url='https://gcn2uy4s0f5x.feishu.cn/wiki/WXOwwrAOxiRncKk42Jccgd34nn3'>
            技术训练营
          </LinkPreview>
          ,{' '}
          <LinkPreview url='https://gcn2uy4s0f5x.feishu.cn/docx/LksXdxiGyolWG5xZTpmcH2cZnUb'>
            产品训练营
          </LinkPreview>
          , 和{' '}
          <LinkPreview url='https://gcn2uy4s0f5x.feishu.cn/wiki/Wa9uwIhrBiC8fgkeO3WccG6snFg'>
            运营训练营
          </LinkPreview>
        </div>
        <div className='flex justify-center pt-10'>
          <div className='max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center'>
            <Button
              asChild
              size='lg'
              className='font-bold group max-sm:w-[100%]'>
              <Link href={`/${currentLocale}/introduction`}>
                开始学习
                <span className='w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]'></span>
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='secondary'
              className='font-bold group max-sm:w-[100%]'>
              <Link href='https://github.com/ibuidl/ib-wiki' target='_blank'>
                Github
                <span className='ml-[6px] icon-[mingcute--github-line]'></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
