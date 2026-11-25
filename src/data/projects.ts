export type Project = {
	title: string;
	description: string;
	url?: string;
	repo?: string;
};

/**
 * Only public, verifiable projects. Descriptions come from public GitHub
 * repo descriptions, public homepages, or labels on the author's public sites.
 */
export const projects: Project[] = [
	{
		title: 'Prompt Minder',
		description:
			'开源的 AI 提示词管理平台，支持版本管理、标签分类、团队协作与公开分享。',
		url: 'https://prompt-minder.com',
		repo: 'https://github.com/aircrushin/promptMinder',
	},
	{
		title: 'Code',
		description:
			'面向写代码的提示词工具。Prompt Minder 公开站点将其标注为 PromptCoder（Code Prompts）。',
		url: 'https://code.lucids.top',
	},
	{
		title: '《已读》Yidu',
		description:
			'原创手绘互动绘本叙事游戏，六章 18 幕、四种结局，支持网页即玩与 Windows 离线版。',
		url: 'https://aircrushin.github.io/yidu/',
		repo: 'https://github.com/aircrushin/yidu',
	},
	{
		title: 'awesome-dify-workflow',
		description:
			'整理过的 Dify 工作流 DSL 与模板，覆盖 RAG、Agent、搜索、翻译、深度研究、SEO 与自动化。',
		repo: 'https://github.com/aircrushin/awesome-dify-workflow',
	},
	{
		title: 'wq-alpha-agent',
		description:
			'自动化的 WorldQuant BRAIN alpha 因子研究 Agent：生成、模拟、多样性检查、提交，并用大模型迭代因子表达式。',
		url: 'https://wq.lucids.top/',
		repo: 'https://github.com/aircrushin/wq-alpha-agent',
	},
	{
		title: 'agent-prompt-kit',
		description:
			'把指挥编码 Agent 时常用的 Prompt 做成 skill，输入 /pk 即可一键调出。',
		url: 'https://skills.sh/aircrushin/agent-prompt-kit',
		repo: 'https://github.com/aircrushin/agent-prompt-kit',
	},
];
