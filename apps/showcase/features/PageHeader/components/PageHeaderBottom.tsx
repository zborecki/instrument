import Typography from '@/components/Typography';

const PageHeaderBottom = () => (
  <div className='mt-24'>
    <Typography color='inherit' size='subhead1'>
      Hello world
    </Typography>
    <div>
      <Typography
        color='inherit'
        componentType='a'
        href='/'
        isExternal={false}
        size='action'
        underline
      >
        Hello world
      </Typography>
    </div>
  </div>
);

export default PageHeaderBottom;
