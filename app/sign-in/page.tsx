'use client';
import NextImage from 'next/image';
import Link from 'next/link';
import {
  Flex,
  Image,
  Text,
  Title,
  Group,
  Stack,
  Anchor,
  Box,
} from '@mantine/core';
import displayImg from '@/public/pic/display-img.png';
import { SignInForm } from './signInForm';
import { IconChevronLeft } from '@tabler/icons-react';
import useLogin from '@/helpers/useLogin';
import { useRouter } from 'next/navigation';

export default function page() {
  const [user, setUser] = useLogin();
  const router = useRouter();
  if (user) {
    router.push('/');
  }
  return (
    <Flex
      pt='7rem'
      pb='2.5rem'
      px='8.4vw'
      mih='100%'
      justify='space-between'
      align='self-start'
      pos='fixed'
      top='0'
      left='0'
      right='0'
      bg='#fff'
      className='overlay'
    >
      <Group
        className='hidden-desktop'
        align='center'
        gap='1rem'
        px='0.5rem'
        py='1rem'
        pos='fixed'
        top='0'
        right='0'
        left='0'
      >
        <Box p='0.5rem' display='flex'>
          <IconChevronLeft size='1.5rem' />
        </Box>
        <Title order={4}>Đăng nhập</Title>
      </Group>
      <Stack className='form'>
        <Title className='hidden-mobile' order={2}>
          Đăng nhập
        </Title>
        <SignInForm />
        <Text size='sm' ta='center'>
          Chưa có tài khoản? <Link href='/sign-up'>Đăng ký ngay</Link>
        </Text>
      </Stack>
      <Image
        className='hidden-tablet'
        component={NextImage}
        src={displayImg}
        alt=''
        radius='3rem'
        w='45vw'
        h='33.3125rem'
      />
    </Flex>
  );
}
