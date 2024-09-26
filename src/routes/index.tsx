import { Button, ButtonType, Chip } from 'wyvern-ui-test';

const Page = () => {
  return (
    <div class={'flex font-oswald flex-1 flex-col p-4 md:p-9'}>
      <h1 class={'text-4xl font-semibold text-secondary-100'}>
        ¿Qué es Phoenix?
      </h1>
      <br />
      <span class={`font-merriweather text-lg text-primary-300`}>
        Este es un ejemplo de documentación.
      </span>
      <br />
      <div class=''>{/*<ProfileHead />/*/}</div>
      <div class='w-[400px]'>{/*<CardCarousel />*/}</div>
      <br />

      <div class='w-[400px]'>{/*<CalendarCard />*/}</div>
      <div class='w-[400px]'>{/*<Conversation />*/}</div>
      {/*<TimelineItem />*/}
      <br />
      {/*<Dialog />*/}
      <div class='flex flex-wrap justify-center gap-5'>
        <Button
          type={ButtonType.Secondary}
          onClick={() => {
            console.log('test1');
          }}
          label='READ MORE'></Button>
        <Button
          type={ButtonType.Primary}
          onClick={() => {
            console.log('test1');
          }}
          label='PURCHASE'></Button>
      </div>
      <br />
      {/*<Switch />*/}
      <div class='flex flex-wrap justify-center gap-5'>
        {/*<Icon icon={MdMenu} type={IconType.FULL} size="30px" />
          <Icon icon={MdMenu} type={IconType.OUTLINE} size="30px" />
          <Icon icon={MdMenu} type={IconType.BORDERLESS} size="30px" />*/}
      </div>
      <br />
      <br />
      <div class=''>{/*<Badge />*/}</div>
    </div>
  );
};
export default Page;
