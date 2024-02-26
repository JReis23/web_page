<script lang="ts">
import Button from '$lib/ui/Button.svelte';

let societyButton: string | null = 'lectra';

const handleSociety =
	(society: string) =>
	(event: CustomEvent<any>): void => {
		societyButton = society;
	};

let className = 'border-l-2 hover:border-green primary hover:text-green p-2 text-start text-sm';
</script>

<section id="experience" class="workplaces">
	<h2 class="numbered-heading">Expérience</h2>
	<div class="container flex pt-6">
		<div class="flex flex-col pr-10">
			<Button
				on:click={handleSociety('lectra')}
				active={societyButton === 'lectra' ? 'active' : ''}
				className={className}>Lectra</Button
			>
			<Button
				on:click={handleSociety('noveoo')}
				active={societyButton === 'noveoo' ? 'active' : ''}
				className={className}>Noveoo</Button
			>
			<Button
				on:click={handleSociety('montauban')}
				active={societyButton === 'montauban' ? 'active' : ''}
				className={className}>Montauban</Button
			>
			<Button
				on:click={handleSociety('rwf')}
				active={societyButton === 'rwf' ? 'active' : ''}
				className={className}>RWF</Button
			>
			<Button
				on:click={handleSociety('patriarca')}
				active={societyButton === 'patriarca' ? 'active' : ''}
				className={className}>Patriarca</Button
			>
		</div>
		<div class="container">
			{#if societyButton === 'montauban'}
				<div>
					<h3>
						Stagiaire <span class="font-KodeMono text-green"
							>@ <a
								class="hover:before:border-b-green"
								href="https://www.montauban-renovation.com/"
								target="_blank">Montauban</a
							></span
						>
					</h3>
					<p>Février 2021 à Mars 2021</p>
				</div>
				<ul class="pt-4">
					<li class="font-CodePro before:text-green">
						Création d'une application pour la gestion du processus de la création du client à la
						facturation des dossiers clients.
					</li>
					<li class="font-CodePro before:text-green">
						Application créée en Django et ensuite gérée par un administrateur et plusieurs
						utlisateurs avec des différents rôles.
					</li>
					<li class="font-CodePro before:text-green">
						Élaboration du projet avec la méthodologie <span class="font-KodeMono text-green"
							>Scrum Agile</span
						>
					</li>
				</ul>
			{:else if societyButton === 'rwf'}
				<div>
					<h3>
						Apprenant <span class="font-KodeMono text-green"
							>@ <a
								class="hover:before:border-b-green"
								href="http://www.patriarca.fr"
								target="_blank">Rural Web Factory</a
							></span
						>
						by
						<span class="font-KodeMono text-green"
							><a class="hover:before:border-b-green" href="https://simplon.co/" target="_blank"
								>Simplon</a
							></span
						>
					</h3>
					<p>Octobre 2020 à Juillet 2021</p>
				</div>
				<ul class="pt-4">
					<li class="font-CodePro before:text-green">
						Apprentissage de langages de base comme JavaScript, HTML et CSS.
					</li>
					<li class="font-CodePro before:text-green">
						Conception de bases de données. Apprentissage MCD et MLD.
					</li>
					<li class="font-CodePro before:text-green">
						Réalisation de plusieurs projets pour améliorer la connaissance générale du métier de
						développeur
					</li>
				</ul>
			{:else if societyButton === 'patriarca'}
				<div>
					<h3>
						Conducteur de travaux <span class="font-KodeMono text-green"
							>@ <a
								class="hover:before:border-b-green"
								href="http://www.patriarca.fr"
								target="_blank">Patriarca</a
							></span
						>
					</h3>
					<p>Janvier 2019 à Mars 2020</p>
				</div>
				<ul class="pt-4">
					<li class="font-CodePro before:text-green">
						Coordination des travaux réalisés dans le cadre d’un ou plusieurs chantiers dans le
						respect de la qualité, des délais et du budget.
					</li>
					<li class="font-CodePro before:text-green">
						Suivi technique, administratif et financier du chantier ainsi que des entreprises
						sous-traitantes.
					</li>
					<li class="font-CodePro before:text-green">
						Etude du dossier et des contrats, préparation de l'opération, définition des besoins,
						méthodes, moyens humains et matériels, planification de l'opération
					</li>
				</ul>
			{:else if societyButton === 'noveoo'}
				<div>
					<h3>
						Développeur Web / Fondateur <span class="font-KodeMono text-green"
							>@ <a href="/">Noveoo</a></span
						>
					</h3>
					<p>Septembre 2021 à 2022</p>
				</div>
				<ul class="pt-4">
					<li class="font-CodePro before:text-green">
						Création de sites Vitrine, Ecommerce, site sur mesure et refonte de sites avec
						l'utilisation de Svelte, CMS, Django, Tailwind, Bootstrap...
					</li>
					<li class="font-CodePro before:text-green">
						Suivi technique et maintenance des sites internet ou des applications web créés en
						fonction des besoins.
					</li>
					<li class="font-CodePro before:text-green">
						Gestion de projet avec l'utlisation de la méthodologie Agile avec une approche Scrum.
					</li>
				</ul>
			{:else if societyButton === 'lectra'}
				<div>
					<h3>
						Développeur logiciel en JavaScript <span class="font-KodeMono text-green"
							>@ <a
								class="hover:before:border-b-green"
								href="https://www.lectra.com/fr"
								target="_blank">Lectra France</a
							></span
						>
					</h3>
					<p>
						Juin <span class="font-KodeMono text-green">2022</span> à
						<span class="font-KodeMono text-green">Présent</span>
					</p>
				</div>
				<ul class="pt-4">
					<li class="font-CodePro before:text-green">
						Intégré au sein d’une équipe <span class="font-KodeMono text-green"
							><strong>AGILE</strong></span
						>, je participe à l’implémentation et l’intégration du PLM de la société dans les
						écosystèmes des clients.
					</li>
					<li class="font-CodePro before:text-green">
						Ces activités consistent à de l’analyse / conception, du développement des
						personnalisations, de la revue de code et de la validation manuelle.
					</li>
					<li class="font-CodePro before:text-green">
						Je participe à l’accompagnement technico fonctionnel des filiales et des clients
						worldwide, de l’implémentation de process métiers clients, de l’intégration avec
						l’écosystème clients et de la livraison des PLM.
					</li>
				</ul>
			{/if}
		</div>
	</div>
</section>

<style>
a {
	display: inline-block;
	text-decoration: none;
	position: relative;
}

li {
	font-size: 1.1em;
	padding: auto;
}

li::before {
	content: '▹';
	margin-right: 1.175rem;
}

a:hover::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 0;
	border-bottom: solid 1px hsl(var(--color-green));
	animation: border_anim 0.5s forwards;
}

@keyframes border_anim {
	0% {
		width: 0%;
	}
	100% {
		width: 100%;
	}
}

@media (max-width: 768px) {
	li {
		padding: 0.375rem 1rem;
	}

	/* .buttons {
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			width: 98vw;
			white-space: nowrap;
		} */
}
</style>
