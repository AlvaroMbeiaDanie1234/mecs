declare module 'particles.js' {
    interface ParticlesOptions {
        selector: string;
    }

    interface Particles {
        init(options: ParticlesOptions): void;
        load(id: string, path: string, callback?: () => void): void;
    }

    const Particles: Particles;
    export default Particles;
}
