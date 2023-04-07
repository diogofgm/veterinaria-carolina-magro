import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
	const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>Veterinária Carolina Mago</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>
			<div className="bg-[url('/images/backgroundForest.jpg')] h-screen w-screen absolute top-0 -z-10 bg-no-repeat bg-cover bg-top left-0" />
			<div className='w-full h-full'>
				<section className='flex flex-col justify-end w-screen h-[calc(100vh-240px)] px-60'>
					<div className='flex flex-col mb-20 font-bold text-white uppercase text-9xl'>
						<p>{t('homePage.bannerCitation1')}</p>
						<p>{t('homePage.bannerCitation2')}</p>
						<p>{t('homePage.bannerCitation3')}</p>
					</div>
				</section>
				<section className='flex flex-col w-full h-full py-20 px-60'>
					<div className='grid w-full h-full grid-cols-2 gap-40'>
						<div className='flex flex-col justify-center w-full h-full gap-5'>
							<h1 className='text-5xl font-bold uppercase'>
								Sobre Mim
							</h1>
							<p className=''>
								Como Vet de Exóticos sou uma profissional
								especializada em tratar de animais não
								“convencionais”, incluindo aves, répteis,
								anfíbios, roedores, coelhos e outros pequenos
								mamíferos. Estes animais lançam-nos desafios
								únicos de diagnóstico e tratamento, pois as suas
								necessidades de saúde e comportamento são
								diferentes dos animais mais comuns. É importante
								que cada clínica tenha acesso a um veterinário
								de exóticos experiente para garantir o melhor
								serviço e cuidado, e é para isso que aqui estou.
							</p>
						</div>
						<div className='w-full h-full'>
							<div className="bg-[url('/images/background.jpeg')] h-[700px] bg-no-repeat bg-cover bg-center" />
						</div>
					</div>
				</section>
				<section className='flex flex-col w-full h-full pt-20 pb-5 px-60'>
					<div className='flex flex-col justify-center'>
						<div className='flex flex-col items-center justify-center gap-5'>
							<h1 className='text-5xl font-bold uppercase'>
								Serviços
							</h1>
							<p className=''>
								É importante que cada clínica tenha acesso a um
								veterinário de exóticos experiente para garantir
								o melhor serviço e cuidado, e é para isso que
								aqui estou.
							</p>
						</div>
					</div>
				</section>
				<section className='flex flex-col w-full h-full pt-5 pb-20'>
					<div className='grid w-full h-full grid-cols-3 grid-rows-2 gap-10'>
						<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
							<div className='flex justify-between'>
								<p className='text-3xl font-bold'>Clínica</p>
								<p className='text-3xl'>01</p>
							</div>
							<p className=''>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Maecenas mollis viverra velit
								quis rhoncus. Nam vel dolor scelerisque,
								dignissim odio imperdiet, ultricies ex. Aliquam
								erat volutpat. Nulla sed dignissim orci, a
								semper augue. Aliquam et est sed lectus mollis
								feugiat. Vestibulum suscipit orci ac eros
								tempus, vel elementum lorem condimentum.
								Suspendisse sit amet sollicitudin sapien, at
								tempus nisi. Aenean mollis neque ut nunc
								pharetra dapibus. Vivamus in dolor sapien.
								Mauris hendrerit porttitor nulla, et elementum
								lorem convallis quis. Cras quis rhoncus mi.
								Donec vulputate metus in ultricies convallis.
								Etiam ultrices lorem eget ligula accumsan
								aliquam. Vestibulum laoreet lobortis libero in
								aliquet. Morbi eleifend placerat velit eu
								placerat. Mauris sodales metus nec lectus
								varius, ut euismod lacus consequat.
							</p>
						</div>
						<div className="bg-[url('/images/porquinho.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
						<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
							<div className='flex justify-between'>
								<p className='text-3xl font-bold'>Cirurgia</p>
								<p className='text-3xl'>02</p>
							</div>
							<p className=''>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Maecenas mollis viverra velit
								quis rhoncus. Nam vel dolor scelerisque,
								dignissim odio imperdiet, ultricies ex. Aliquam
								erat volutpat. Nulla sed dignissim orci, a
								semper augue. Aliquam et est sed lectus mollis
								feugiat. Vestibulum suscipit orci ac eros
								tempus, vel elementum lorem condimentum.
								Suspendisse sit amet sollicitudin sapien, at
								tempus nisi. Aenean mollis neque ut nunc
								pharetra dapibus. Vivamus in dolor sapien.
								Mauris hendrerit porttitor nulla, et elementum
								lorem convallis quis. Cras quis rhoncus mi.
								Donec vulputate metus in ultricies convallis.
								Etiam ultrices lorem eget ligula accumsan
								aliquam. Vestibulum laoreet lobortis libero in
								aliquet. Morbi eleifend placerat velit eu
								placerat. Mauris sodales metus nec lectus
								varius, ut euismod lacus consequat.
							</p>
						</div>
						<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
							<div className='flex justify-between'>
								<p className='text-3xl font-bold'>Urgências</p>
								<p className='text-3xl'>03</p>
							</div>
							<p className=''>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Maecenas mollis viverra velit
								quis rhoncus. Nam vel dolor scelerisque,
								dignissim odio imperdiet, ultricies ex. Aliquam
								erat volutpat. Nulla sed dignissim orci, a
								semper augue. Aliquam et est sed lectus mollis
								feugiat. Vestibulum suscipit orci ac eros
								tempus, vel elementum lorem condimentum.
								Suspendisse sit amet sollicitudin sapien, at
								tempus nisi. Aenean mollis neque ut nunc
								pharetra dapibus. Vivamus in dolor sapien.
								Mauris hendrerit porttitor nulla, et elementum
								lorem convallis quis. Cras quis rhoncus mi.
								Donec vulputate metus in ultricies convallis.
								Etiam ultrices lorem eget ligula accumsan
								aliquam. Vestibulum laoreet lobortis libero in
								aliquet. Morbi eleifend placerat velit eu
								placerat. Mauris sodales metus nec lectus
								varius, ut euismod lacus consequat.
							</p>
						</div>
						<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
							<div className='flex justify-between'>
								<p className='text-3xl font-bold'>
									Consultas de Rotina
								</p>
								<p className='text-3xl'>04</p>
							</div>
							<p className=''>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Maecenas mollis viverra velit
								quis rhoncus. Nam vel dolor scelerisque,
								dignissim odio imperdiet, ultricies ex. Aliquam
								erat volutpat. Nulla sed dignissim orci, a
								semper augue. Aliquam et est sed lectus mollis
								feugiat. Vestibulum suscipit orci ac eros
								tempus, vel elementum lorem condimentum.
								Suspendisse sit amet sollicitudin sapien, at
								tempus nisi. Aenean mollis neque ut nunc
								pharetra dapibus. Vivamus in dolor sapien.
								Mauris hendrerit porttitor nulla, et elementum
								lorem convallis quis. Cras quis rhoncus mi.
								Donec vulputate metus in ultricies convallis.
								Etiam ultrices lorem eget ligula accumsan
								aliquam. Vestibulum laoreet lobortis libero in
								aliquet. Morbi eleifend placerat velit eu
								placerat. Mauris sodales metus nec lectus
								varius, ut euismod lacus consequat.
							</p>
						</div>
						<div className="bg-[url('/images/cirurgia.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
					</div>
				</section>
				<section className='flex flex-col w-full h-full pt-20 pb-5 px-60'>
					<div className='flex flex-col justify-center'>
						<div className='flex flex-col items-center justify-center gap-10'>
							<h1 className='text-5xl font-bold uppercase'>
								Pacientes
							</h1>
							<div className='grid w-full h-full grid-cols-4 grid-rows-1 gap-5'>
								<div className="bg-[url('/images/pacientes1.webp')] bg-no-repeat bg-cover bg-center w-full h-[700px]" />
								<div className="bg-[url('/images/pacientes2.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
								<div className="bg-[url('/images/pacientes3.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
								<div className="bg-[url('/images/pacientes4.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
							</div>
						</div>
					</div>
				</section>
				<section className='flex flex-col w-full h-full pt-20 pb-5 px-60'>
					<div className='flex flex-col justify-center'>
						<div className='flex flex-col items-center justify-center gap-10'>
							<h1 className='text-5xl font-bold uppercase'>
								Onde me Encontrar
							</h1>
							<p className='text-center'>
								Presto serviços em diversas clínicas e colaboro
								com as suas equipas para proporcionar o melhor
								cuidado no tratamento de Exóticos. Como
								Veterinária especializada em exóticos, a minha
								presença transmite uma maior confiança aos
								clientes e aumenta o leque de serviços que a
								clínica pode oferecer.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
