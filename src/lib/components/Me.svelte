<script>
</script>

<section id="me" class="me">
	<h2 class="numbered-heading">Qui je suis ?</h2>
	<article>
		<div>
			<div class="about">
				<p>
					Mon intérêt pour le développement web a commencé il y a quelques années. Mais c’est en
					2020 que j'ai décidé que c'était le bon moment pour changer de métier et essayer de
					réaliser mon rêve de travailler dans le développement d'applications web !<br /><br
					/>Avant d'être développeur web, j'ai été conducteur de travaux dans le bâtiment et j'ai
					aussi travaillé pour le back-office d'une entreprise dans le domaine de la communication.
					Les métiers que j'ai exercés ont fait de moi un professionnel ayant de l'expérience dans
					la gestion des clients et des équipes.
					<br /><br />Ma formation de développeur Web a eu lieu entre novembre 2020 et juillet 2021.
					Pendant la formation, j'ai appris à travailler avec des langages comme
					<span>JavaScript, HTML, CSS, SQL et Python</span> et peu après la formation, j'ai commencé
					à travailler avec <span>React</span> et surtout <span>SVELTE</span> (utilisé pour la
					réalisation du portfolio). Au cours de ma formation, j'ai également suivi une formation
					<span>Opquast</span>
					et une formation <span>Agile</span>. <br /><br />Voici quelques technologies avec
					lesquelles j'ai travaillé récemment :
				</p>
			</div>
			<div class="stack">
				<ul>
					<li>Svelte</li>
					<li>Django</li>
					<li>Python</li>
					<li>Tailwind</li>
				</ul>
				<ul>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
		</div>
		<div class="photo">
			<picture>
				<img src="/img/me.jpg" alt="joao reis" />
			</picture>
		</div>
	</article>
</section>

<style>
section {
	display: flex;
	flex-flow: column;
	justify-content: center;
}
article {
	display: flex;

	& .stack {
		display: flex;
	}

	& .about {
		max-width: 75ch;
		padding-right: 2rem;
	}
}

ul {
	padding-right: 5rem;
	padding-top: 3rem;
}

ul li {
	&::before {
		content: '▹';
		color: var(--contrast-color);
		margin-right: 1.175rem;
	}
}
picture {
	position: relative;
	display: inline-block;
	transition: 0.5s ease-in-out;
	border-radius: 5px;
	z-index: 1;

	&::before {
		content: '';
		border: 1px solid var(--contrast-color);
		position: absolute;
		top: 10px;
		left: 10px;
		width: 100%;
		height: 100%;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
	}

	&::after {
		content: '';
		background: var(--contrast-color-transparent);
		position: absolute;
		display: block;
		width: 100%;
		top: 0;
		bottom: 0;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		z-index: 1;
	}

	&:hover {
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}

	&:hover::before {
		transition: 0.5s ease-in-out;
		transform: translateY(-5px);
		transform: translateX(-5px);
	}

	&:hover::after {
		background: none;
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}
}

img {
	border-radius: 5px;
	z-index: 1;
	position: relative;
	max-width: 15rem;
}
@media (max-width: 768px) {
	.photo {
		display: flex;
		justify-content: center;
		padding-top: 5rem;
	}

	ul {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		padding: 2rem;
	}
}
</style>
