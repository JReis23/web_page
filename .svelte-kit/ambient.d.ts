
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const GJS_DEBUG_TOPICS: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies_sveltekit_superforms: string;
	export const npm_package_devDependencies_vitest: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const DESKTOP_SESSION: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const npm_package_scripts_studio: string;
	export const npm_package_dependencies_postgres: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const PAGER: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_scripts_check: string;
	export const npm_package_dependencies_drizzle_orm: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const CINNAMON_VERSION: string;
	export const P9K_TTY: string;
	export const npm_package_scripts_migrate: string;
	export const npm_config_engine_strict: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLORTERM: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_pg: string;
	export const MANDATORY_PATH: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_zod: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const _P9K_SSH_TTY: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const XDG_SESSION_CLASS: string;
	export const DEFAULTS_PATH: string;
	export const USER_ZDOTDIR: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_config_registry: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const npm_package_devDependencies_drizzle_kit: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_package_dependencies_mongodb: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const GDM_LANG: string;
	export const GTK3_MODULES: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_scripts_test_unit: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_eslint: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_package_devDependencies_dotenv: string;
	export const npm_lifecycle_script: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const GPG_AGENT_INFO: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const P9K_SSH: string;
	export const npm_package_scripts_generate: string;
	export const XDG_VTNR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_NONCE: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const ZDOTDIR: string;
	export const _P9K_TTY: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		GJS_DEBUG_TOPICS: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies_sveltekit_superforms: string;
		npm_package_devDependencies_vitest: string;
		LANGUAGE: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		LESS: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		DESKTOP_SESSION: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		ZSH: string;
		LSCOLORS: string;
		npm_package_scripts_studio: string;
		npm_package_dependencies_postgres: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		PAGER: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_devDependencies_svelte_check: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_scripts_check: string;
		npm_package_dependencies_drizzle_orm: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		CINNAMON_VERSION: string;
		P9K_TTY: string;
		npm_package_scripts_migrate: string;
		npm_config_engine_strict: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLORTERM: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_pg: string;
		MANDATORY_PATH: string;
		QT_QPA_PLATFORMTHEME: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_zod: string;
		LOGNAME: string;
		npm_package_type: string;
		_P9K_SSH_TTY: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		XDG_SESSION_CLASS: string;
		DEFAULTS_PATH: string;
		USER_ZDOTDIR: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_config_registry: string;
		XDG_SESSION_ID: string;
		TERM: string;
		npm_package_devDependencies_drizzle_kit: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_package_dependencies_mongodb: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		npm_config_node_gyp: string;
		PATH: string;
		GDM_LANG: string;
		GTK3_MODULES: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		NODE: string;
		XDG_SESSION_PATH: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		npm_package_scripts_test_integration: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_scripts_test_unit: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_eslint: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_package_devDependencies_dotenv: string;
		npm_lifecycle_script: string;
		XDG_GREETER_DATA_DIR: string;
		SSH_AUTH_SOCK: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		GPG_AGENT_INFO: string;
		GJS_DEBUG_OUTPUT: string;
		P9K_SSH: string;
		npm_package_scripts_generate: string;
		XDG_VTNR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_NONCE: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		ZDOTDIR: string;
		_P9K_TTY: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies__types_eslint: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
