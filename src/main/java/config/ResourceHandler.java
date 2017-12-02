package config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by yisuo on 10/31/17.
 */
@Configuration
public class ResourceHandler extends WebMvcConfigurerAdapter {
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/");
        registry.addResourceHandler("/web/**").addResourceLocations("/");
    }
}