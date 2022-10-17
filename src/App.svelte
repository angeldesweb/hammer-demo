<script>
    import { Router , Route } from 'svelte-navigator';
    import { Home , Auto , Ilum , Contact } from './routes';
</script>

<Router>
    <div>
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/automotriz/*">
            <Route path="/">
                <Auto/>
            </Route>
            <Route path="contact">
                <Contact/>
            </Route>
        </Route>
        <Route path="/iluminacion/*">
            <Route path="/">
                <Ilum/>
            </Route>
            <Route path="contact">
                <Contact/>
            </Route>
        </Route>
    </div>
</Router>