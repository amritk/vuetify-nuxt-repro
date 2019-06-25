import fs from 'fs'
import recursiveReaddir from 'recursive-readdir'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

// Grab all of our local components for auto loading
const localComponents: {
    [key: string]: string
} = {}
recursiveReaddir('src/components', (err, items) => {
    for (const item of items) {
        localComponents[item.replace(/^(.*[\\/])/, '').slice(0, -4)] = item.replace('src', '')
    }
})

export default new VuetifyLoaderPlugin({
    match: (originalTag: string, { kebabTag, camelTag }: { kebabTag: string; camelTag: string}) => {
        const comp = localComponents[kebabTag]
        if (comp) {
            return [camelTag, `import ${camelTag} from '@${comp}'`]
        }
    }
})