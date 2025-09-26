
const env: Record<string, string> = {}

const initialize = (cfenv: Record<string, string>) => {
    Object.entries(cfenv).forEach(([k, v]) => {env[k] = v})
}

export {initialize, env}